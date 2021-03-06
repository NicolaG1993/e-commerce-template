/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { memo } from "react";
import leftArrow from "./img/left-arrow.svg";
import rightArrow from "./img/right-arrow.svg";

const Arrow = ({ direction, handleClick }) => {
    return (
        <div
            onClick={handleClick}
            css={css`
                display: flex;
                position: absolute;
                top: 45%;
                ${direction === "right" ? `right: 25px` : `left: 25px`};
                height: 50px;
                width: 50px;
                justify-content: center;
                background: rgba(255, 255, 255, 0.055);
                border-radius: 50%;
                cursor: pointer;
                align-items: center;
                transition: ease-in 0.2s;

                &:hover {
                    transform: scale(1.1);
                    background: rgba(255, 255, 255, 0.89);
                }

                img {
                    transform: translateX(
                        ${direction === "left" ? "-2" : "2"}px
                    );

                    &:focus {
                        outline: 0;
                    }
                }
            `}
        >
            {direction === "right" ? (
                <img src={rightArrow} />
            ) : (
                <img src={leftArrow} />
            )}
        </div>
    );
};

export default memo(Arrow);
