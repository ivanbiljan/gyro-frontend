import atlassianLogo from "assets/svgs/atlassianSvg.svg";
// export function GetImage(image: GyroImageEnum) {
//     switch (image) {
//     }
// }

export enum GyroSvgEnum {
    AtlassianLogo
}

export function GetSvgSrc(svg: GyroSvgEnum) {
    switch (svg) {
        case GyroSvgEnum.AtlassianLogo:
            return atlassianLogo;
    }
}
