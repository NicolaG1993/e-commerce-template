/** @jsxImportSource @emotion/react */
import { memo } from "react";
// eslint-disable-next-line indent
import { css } from "@emotion/react";

const Dot = ({ active }) => {
    return (
        <span
            css={css`
                padding: 6px;
                margin: 5px;
                border-radius: 50%;
                background: ${active
                    ? // eslint-disable-next-line indent
                      "rgb(231, 134, 235)"
                    : // eslint-disable-next-line indent
                      "rgb(205,205,205)"};
            `}
        />
    );
};

const MemoDot = memo(Dot);

const Dots = ({ slides, activeSlide }) => {
    return (
        <div
            css={css`
                position: absolute;
                bottom: -60px;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            `}
        >
            {slides.map((slide, i) => (
                <MemoDot key={slide} active={activeSlide === i} />
            ))}
        </div>
    );
};

export default Dots;
