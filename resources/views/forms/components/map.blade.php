@php
    $statePath = $getStatePath();
    $defaultPosition = $getDefaultPosition();
    $defaultZoom = $getDefaultZoom();
    $placeholder= $getPlaceholder();
    $searchPlaceholder = __('filament-openstreetmap::input.search_placeholder');
@endphp

<x-dynamic-component
        :component="$getFieldWrapperView()"
        :field="$field"
>
    <div
            class="mapInput"
            x-data="{
            state: $wire.entangle('{{ $statePath }}'),
            searchQuery: '',
            searchResults: [],
            searching: false,
            showResults: false,
            map: null,
            marker: null,

            init() {
                this.map = L.map(this.$refs.map).setView({{ json_encode($defaultPosition) }}, {{ $defaultZoom }});

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '© OpenStreetMap'
                }).addTo(this.map);

                if (this.state) {
                    const coords = this.state.split(',');
                    const lat = parseFloat(coords[0]);
                    const lng = parseFloat(coords[1]);
                    this.marker = L.marker([lat, lng]).addTo(this.map);
                    this.map.setView([lat, lng]);
                }

                this.map.on('click', (e) => {
                    this.setMarker(e.latlng.lat, e.latlng.lng);
                });

                document.addEventListener('click', (e) => {
                    if (!this.$refs.searchWrap.contains(e.target)) {
                        this.showResults = false;
                    }
                });
            },

            setMarker(lat, lng) {
                if (this.marker) {
                    this.map.removeLayer(this.marker);
                }
                this.marker = L.marker([lat, lng]).addTo(this.map);
                this.state = `${lat},${lng}`;
            },

            async search() {
                const q = this.searchQuery.trim();
                if (q.length < 2) {
                    this.searchResults = [];
                    return;
                }
                this.searching = true;
                this.showResults = true;
                try {
                    const resp = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(q)}&limit=5`, {
                        headers: { 'Accept': 'application/json' }
                    });
                    this.searchResults = await resp.json();
                } catch (e) {
                    this.searchResults = [];
                }
                this.searching = false;
            },

            selectResult(item) {
                const lat = parseFloat(item.lat);
                const lon = parseFloat(item.lon);
                this.setMarker(lat, lon);
                this.map.setView([lat, lon], 16);
                this.searchQuery = item.display_name;
                this.showResults = false;
            }
        }"
            wire:ignore
    >
        <div x-ref="searchWrap" style="position: relative; margin-bottom: 0.5rem; z-index: 2000;">
            <x-filament::input.wrapper>
                <div style="display: flex; align-items: center;">
                    <div style="padding-left: 0.75rem; color: #6b7280;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    </div>
                    <input
                            type="text"
                            x-model="searchQuery"
                            @input.debounce.400ms="search"
                            @focus="if (searchResults.length) showResults = true"
                            class="fi-input"
                            style="border: none; outline: none; box-shadow: none;"
                            placeholder="{{ $searchPlaceholder }}"
                    />
                </div>
            </x-filament::input.wrapper>
            <div
                    x-show="showResults && searchResults.length > 0"
                    x-transition
                    class="osm-search-results"
            >
                <template x-for="(item, index) in searchResults" :key="index">
                    <div
                            @click="selectResult(item)"
                            class="osm-search-item"
                    >
                        <span x-text="item.display_name"></span>
                    </div>
                </template>
            </div>
            <div
                    x-show="searching"
                    style="position: absolute; top: 100%; right: 0.75rem; z-index: 2001; padding: 0.5rem;"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="animation: spin 1s linear infinite;"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
            </div>
        </div>

        <div x-ref="map" style="height: 400px; width: 100%; border-radius: 0.5rem;"></div>

        <x-filament::input.wrapper class="mt-2">
            <input
                    type="text"
                    x-model="state"
                    readonly
                    class="fi-input"
                    placeholder="{{$placeholder}}"
            />
        </x-filament::input.wrapper>
    </div>
</x-dynamic-component>

@once
    @push('styles')
        <link rel="stylesheet" href="{{ asset('vendor/filament-openstreetmap/leaflet/leaflet.css') }}" />
        <style>
            @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

            .osm-search-results {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                z-index: 2000;
                border-radius: 0.5rem;
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
                max-height: 240px;
                overflow-y: auto;
                margin-top: 0.25rem;
                background-color: var(--color-white, #fff);
                border: 1px solid var(--color-gray-200, #e5e7eb);
            }
            .dark .osm-search-results {
                background-color: var(--color-gray-800, #1f2937);
                border-color: var(--color-gray-700, #374151);
            }

            .osm-search-item {
                padding: 0.5rem 0.75rem;
                cursor: pointer;
                font-size: 0.875rem;
                border-bottom: 1px solid var(--color-gray-100, #f3f4f6);
                color: var(--color-gray-700, #374151);
            }
            .dark .osm-search-item {
                color: var(--color-gray-300, #d1d5db);
                border-bottom-color: var(--color-gray-700, #374151);
            }

            .osm-search-item:hover {
                background-color: var(--color-gray-50, #f9fafb);
            }
            .dark .osm-search-item:hover {
                background-color: var(--color-gray-700, #374151);
            }
        </style>
    @endpush

    @push('scripts')
        <script src="{{ asset('vendor/filament-openstreetmap/leaflet/leaflet.js') }}"></script>
    @endpush
@endonce
