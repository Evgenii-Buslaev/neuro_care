export type TypeBuildMode = 'production' | 'development'
export type TypeBuildPlatform = 'mobile' | 'desktop'
export interface BuildPaths {
    entry: string,
    html: string,
    output: string,
    src: string,
}
export interface BuildOptions {
    port: number,
    paths: BuildPaths,
    mode: TypeBuildMode,
    platform: TypeBuildPlatform,
    analyser?: boolean,
}