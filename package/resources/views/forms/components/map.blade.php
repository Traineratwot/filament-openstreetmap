@php
    $statePath = $getStatePath();
    $defaultPosition = $getDefaultPosition();
    $defaultZoom = $getDefaultZoom();
@endphp

<x-dynamic-component
        :component="$getFieldWrapperView()"
        :field="$field"
>
    <div
            x-data="{
            state: $wire.entangle('{{ $statePath }}'),
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
                    if (this.marker) {
                        this.map.removeLayer(this.marker);
                    }
                    this.marker = L.marker(e.latlng).addTo(this.map);
                    this.state = `${e.latlng.lat},${e.latlng.lng}`;
                });
            }
        }"
            wire:ignore
    >
        <div x-ref="map" style="height: 400px; width: 100%; border-radius: 0.5rem;"></div>

        <x-filament::input.wrapper class="mt-2">
            <input
                    type="text"
                    x-model="state"
                    readonly
                    class="fi-input"
                    placeholder="Кликните на карту"
            />
        </x-filament::input.wrapper>
    </div>
</x-dynamic-component>

@once
    @push('styles')
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    @endpush

    @push('scripts')
        <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    @endpush
@endonce