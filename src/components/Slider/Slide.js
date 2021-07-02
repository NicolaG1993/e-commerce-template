/** @jsxImportSource @emotion/react */
import { memo } from "react";
import { css } from "@emotion/react";

const Slide = ({ content }) => {
    return (
        <div
            css={css`
                height: 100%;
                width: 100vw;
                background-image: url("${content}");
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
            `}
        />
    );
};

export default memo(Slide);
