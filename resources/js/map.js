function mapInit(config) {
    return {
        state: null,
        searchQuery: '',
        searchResults: [],
        searching: false,
        showResults: false,
        map: null,
        marker: null,
        markersOnly: config.markersOnly || false,
        init() {
            this.state = this.$wire.entangle(config.statePath);
            this.map = L.map(this.$refs.map).setView(config.defaultPosition, config.defaultZoom);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap'
            }).addTo(this.map);

            const self = this;

            config.markers.forEach(function(m) {
                const icon = L.divIcon({
                    className: 'custom-marker',
                    html: '<div style="background-color:' + m.color + ';width:12px;height:12px;border-radius:50%;border:2px solid white;box-shadow:0 1px 3px rgba(0,0,0,0.3);"></div>',
                    iconSize: [16, 16],
                    iconAnchor: [8, 8]
                });
                const mkr = L.marker([m.lat, m.lng], { icon: icon }).addTo(self.map);
                if (m.title) {
                    mkr.bindPopup(m.title);
                }
                mkr.on('click', function() {
                    self.setMarker(m.lat, m.lng);
                });
            });

            const coords = this._parseState();
            if (coords) {
                this.marker = L.marker([coords.lat, coords.lng]).addTo(this.map);
                this.map.setView([coords.lat, coords.lng]);
            }

            if (!this.markersOnly) {
                this.map.on('click', function(e) {
                    self.setMarker(e.latlng.lat, e.latlng.lng);
                });
            }

            document.addEventListener('click', function(e) {
                if (!self.$refs.searchWrap.contains(e.target)) {
                    self.showResults = false;
                }
            });
        },
        _parseState() {
            const s = this.state;
            if (!s) return null;
            if (typeof s === 'string') {
                const c = s.split(',');
                if (c.length === 2) {
                    const lat = parseFloat(c[0]);
                    const lng = parseFloat(c[1]);
                    if (!isNaN(lat) && !isNaN(lng)) return { lat, lng };
                }
                return null;
            }
            if (typeof s === 'object') {
                const lat = parseFloat(s.latitude ?? s.lat);
                const lng = parseFloat(s.longitude ?? s.lng);
                if (!isNaN(lat) && !isNaN(lng)) return { lat, lng };
            }
            return null;
        },
        setMarker(lat, lng) {
            if (this.marker) {
                this.map.removeLayer(this.marker);
            }
            this.marker = L.marker([lat, lng]).addTo(this.map);
            this.state = lat + ',' + lng;
        },
        doSearch() {
            const q = this.searchQuery.trim();

            if (this.markersOnly) {
                if (q.length < 1) {
                    this.searchResults = [];
                    return;
                }
                this.searchResults = config.markers.filter(function(m) {
                    return m.title && m.title.toLowerCase().indexOf(q.toLowerCase()) !== -1;
                });
                this.showResults = this.searchResults.length > 0;
                return;
            }

            if (q.length < 2) {
                this.searchResults = [];
                return;
            }
            this.searching = true;
            this.showResults = true;
            const self = this;
            fetch('https://nominatim.openstreetmap.org/search?format=json&q=' + encodeURIComponent(q) + '&limit=5', {
                headers: { 'Accept': 'application/json' }
            })
            .then(function(r) { return r.json(); })
            .then(function(d) {
                self.searchResults = d;
                self.searching = false;
            })
            .catch(function() {
                self.searchResults = [];
                self.searching = false;
            });
        },
        selectResult(item) {
            const lat = parseFloat(item.lat);
            const lon = parseFloat(item.lng ?? item.lon);
            this.setMarker(lat, lon);
            this.map.setView([lat, lon], 16);
            this.searchQuery = item.display_name ?? item.title;
            this.showResults = false;
        }
    };
}
