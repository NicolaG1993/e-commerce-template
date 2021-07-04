/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { memo } from "react";

const Dot = ({ active }) => {
    return (
        <span
            css={css`
                padding: 6px;
                margin: 5px;
                border-radius: 50%;
                background: ${
                    active
                        ? // eslint-disable-next-line indent
                          "var(--color200)"
                        : // eslint-disable-next-line indent
                          "var(--bg200)"
                };
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
                bottom: 10px;
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
