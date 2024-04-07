export type TypeBuildMode = 'production' | 'development'
export interface BuildPaths {
    entry: string,
    html: string,
    output: string,
}
export interface BuildOptions {
    port: number,
    paths: BuildPaths,
    mode: TypeBuildMode,
    analyser?: boolean,
}