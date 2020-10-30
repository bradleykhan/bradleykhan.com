import { css } from "styled-components";

export const centerFlex = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const text = css`
    font-family: "Inter";
    font-size: var(--smallest);
    font-weight: 400;
    color: var(--lightgrey);
    letter-spacing: 0.5px;
    line-height: 24px;
`;

export const heading = css`
    font-family: "Inter";
    font-size: var(--smallest);
    font-weight: 600;
    color: var(--orange);
    letter-spacing: 4px;
    margin: 0;
    margin-bottom: 20px;
`;

export const subtitle = css`
    font-family: "Inter";
    font-size: var(--bigger);
    font-weight: 600;
    color: var(--white);
    margin-bottom: 20px;
    line-height: 36px;
`;