@php
    use Filament\Support\Facades\FilamentView;

    $hasInlineLabel = $hasInlineLabel();
    $isConcealed = $isConcealed();
    $isDisabled = $isDisabled();
    $rows = $getRows();
    $shouldAutosize = $shouldAutosize();
    $statePath = $getStatePath();
    $startLat = $getLatitude();
    $startLon = $getLongitude();
    $initialHeight = (($rows ?? 2) * 1.5) + 0.75;
@endphp
<style>
    .mouse-position-{{ $getId() }}  {
        display: none;
    }
</style>
<x-dynamic-component
    :component="$getFieldWrapperView()"
    :field="$field"
    :has-inline-label="$hasInlineLabel"
>
    <x-slot
        name="label"
        @class([
            'sm:pt-1.5' => $hasInlineLabel,
        ])
    >
        {{ $getLabel() }}
    </x-slot>


    <x-filament::input.wrapper
        :disabled="$isDisabled"
        :valid="! $errors->has($statePath)"
        :attributes="
            \Filament\Support\prepare_inherited_attributes($getExtraAttributeBag())
                ->class(['fi-fo-textarea overflow-hidden'])
        "
    >

        <div id="OSMap-{{ $getId() }}" style="height: max(500px, 100%);width: max(100px, 100%)"></div>
        <textarea
            {{
                $getExtraInputAttributeBag()
                    ->merge([
                        'autocomplete' => $getAutocomplete(),
                        'autofocus' => $isAutofocused(),
                        'cols' => $getCols(),
                        'disabled' => true,
                        'id' => 't-'.$getId(),
                        'maxlength' => (! $isConcealed) ? $getMaxLength() : null,
                        'minlength' => (! $isConcealed) ? $getMinLength() : null,
                        'placeholder' => $getPlaceholder(),
                        'readonly' => $isReadOnly(),
                        'required' => $isRequired() && (! $isConcealed),
                        'rows' => $rows,
                        $applyStateBindingModifiers('wire:model') => $statePath,
                    ], escape: false)
                    ->class([
                        'block w-full border-none bg-transparent px-3 py-1.5 text-base text-gray-950 placeholder:text-gray-400 focus:ring-0 disabled:text-gray-500 disabled:[-webkit-text-fill-color:theme(colors.gray.500)] disabled:placeholder:[-webkit-text-fill-color:theme(colors.gray.400)] dark:text-white dark:placeholder:text-gray-500 dark:disabled:text-gray-400 dark:disabled:[-webkit-text-fill-color:theme(colors.gray.400)] dark:disabled:placeholder:[-webkit-text-fill-color:theme(colors.gray.500)] sm:text-sm sm:leading-6',
                        'resize-none' => $shouldAutosize,
                    ])
                    ->style([
                        "height: {$initialHeight}rem" => $shouldAutosize,
                    ])
            }}
        ></textarea>
    </x-filament::input.wrapper>
    <x-filament::input.wrapper
        :disabled="$isDisabled"
        :valid="! $errors->has($statePath)"
        :attributes="
            \Filament\Support\prepare_inherited_attributes($getExtraAttributeBag())
                ->class(['fi-fo-text-input overflow-hidden'])
        "
    >
        <x-filament::input
            :attributes="
                \Filament\Support\prepare_inherited_attributes($getExtraInputAttributeBag())
                    ->merge([
                        'disabled' => $isDisabled,
                        'id' => $getId(),
                        'placeholder' => $getPlaceholder(),
                        'readonly' => $isReadOnly(),
                        'required' => $isRequired() && (! $isConcealed),
                        'type' => 'text',
                        'class' => 'mouse-position-'.$getId(),
                        $applyStateBindingModifiers('wire:model') => $statePath,
                    ], escape: false)
            "
        />
    </x-filament::input.wrapper>

    <script type="text/javascript" class="filament-open-street-map">


        setInterval(() => {
            let point
            if (typeof window.traineratwot !== 'undefined') {
                const input = document.getElementById('{{ $getId() }}')
                const compare = () => {
                    try {
                        const values = input.value.split(',')
                        const [lat, lon] = point.getCoordinates()
                        if (values.length === 2) {
                            const newLat = parseFloat(values[0])
                            const newLon = parseFloat(values[1])
                            if (newLat !== lat || newLon !== lon) {
                                point.setCoordinates(newLat, newLon)
                            }
                        }
                    } catch (e) {

                    }
                }
                if (!document.getElementById('OSMap-{{ $getId() }}').classList.contains('map-done')) {

                    point = window.traineratwot.GetPointMap('{{ $getId() }}', {{  $startLat }}, {{ $startLon }})
                    input.addEventListener('input', compare)
                    compare()
                    point.onChange(function(x, y) {
                        input.value = `${x}, ${y}`
                        input.dispatchEvent(new Event('input'))
                        input.dispatchEvent(new Event('change'))
                        input.dispatchEvent(new Event('blur'))
                    })
                }
            }
        }, 200)
    </script>
</x-dynamic-component>