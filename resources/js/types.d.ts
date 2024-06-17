declare module 'ol-geocoder' {
    class Geocoder {
        constructor(name: string, options: any)

        on(event: string, callback: (evt: any) => void): void
    }
}
