import { GetSvgSrc, GyroSvgEnum } from "utils/imageIconEnum";

export interface SvgImageProps {
    svg: GyroSvgEnum;
}

function SvgImage(props: SvgImageProps) {
    const Svg = GetSvgSrc(props.svg);

    return (
        <div>
            <Svg />
        </div>
    );
}

export default SvgImage;
