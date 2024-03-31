import { Configuration } from "webpack";

export default function buildResolvers(): Configuration['resolve'] {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}