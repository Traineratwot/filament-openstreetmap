@php
    $statePath = $getStatePath();
    $defaultPosition = $getDefaultPosition();
    $defaultZoom = $getDefaultZoom();
    $placeholder= $getPlaceholder();
    $searchPlaceholder = __('filament-openstreetmap::input.search_placeholder');
    $markers = $getMarkers();
    $markersOnly = $getMarkersOnly();
@endphp

@assets
    <link rel="stylesheet" href="{{ asset('vendor/filament-openstreetmap/leaflet/leaflet.css') }}" />
    <script src="{{ asset('vendor/filament-openstreetmap/leaflet/leaflet.js') }}"></script>
@endassets

<x-dynamic-component
        :component="$getFieldWrapperView()"
        :field="$field"
>
    <div
            class="mapInput"
            x-data="mapInit({
                statePath: '{{ $statePath }}',
                defaultPosition: {{ json_encode($defaultPosition) }},
                defaultZoom: {{ $defaultZoom }},
                markers: @js($markers),
                markersOnly: {{ $markersOnly ? 'true' : 'false' }}
            })"
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
                            @input.debounce.400ms="doSearch"
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
                        <span x-text="item.display_name || item.title"></span>
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
