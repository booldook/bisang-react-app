import styled from "@emotion/styled";
import { css } from "@emotion/react";

export default styled;
export * from "@emotion/react";

export const color = {
  primary: '#234232',
  secondary: '#881122',
}

export const size = {
  xs: '576px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xl: '1400px',
}

export const media = {
  xs: ` (min-width: ${size.xs})`,
  sm: ` (min-width: ${size.sm})`,
  md: ` (min-width: ${size.md})`,
  lg: ` (min-width: ${size.lg})`,
  xl: ` (min-width: ${size.xl})`,
}

export const flex = ({ w = 'nowrap', d = 'horizontal', jc = 'flex-start', ai = 'stretch' }) => {
  return css`
    display: flex;
    flex-wrap: ${w};
    flex-direction: ${d};
    justify-content: ${jc};
    align-items: ${ai};
  `
}
