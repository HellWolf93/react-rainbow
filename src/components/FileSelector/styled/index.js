import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import IconContainer from '../../Input/styled/iconContainer';
import ButtonIcon from '../../ButtonIcon';
import { MARGIN_X_SMALL } from '../../../styles/margins';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import { PADDING_MEDIUM } from '../../../styles/paddings';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledDropzone = attachThemeAttrs(styled.div)`     
    position: relative;
    height: 2.5rem;   
    padding: 4px;
    border: dashed 1px ${props => props.palette.text.disabled};
    border-radius: ${BORDER_RADIUS_2};
    background-color: ${props => props.palette.background.disabled};
    color: ${props => props.palette.text.main};

    &:hover {
        cursor: pointer;
        border: dashed 1px ${props => props.palette.brand.main};
    }

    ${props =>
        props.hasFocus &&
        `
        outline: 0;
        border: solid 1px ${props.palette.brand.main};
        box-shadow: ${props.shadows.brand};
        `}

    ${props =>
        props.variant === 'normal' &&
        `
        height: 12rem;
        border-radius: 27px;
        `}

    ${props =>
        props.disabled &&
        `
        color: ${props.palette.text.disabled};

        &:hover {
            cursor: not-allowed;
            border-color: ${props.palette.text.disabled}
        }
        `}

    ${props =>
        props.error &&
        `
        color: ${props.palette.error.main};
        border: dashed 1px ${props.palette.error.main};
        background-color: ${props.palette.error.light};

        &:hover {
            border: dashed 1px ${props.palette.error.main};
        }

        ${props.hasFocus &&
            `
            outline: 0;
            border: solid 1px ${props.palette.error.main};
            box-shadow: ${props.shadows.error};
            `}
        `}
    
    ${props =>
        props.isDragOver &&
        `
        color: ${props.palette.brand.main};
        background-color: ${props.palette.brand.light};
        border-color: ${props.palette.brand.main};
        `}
`;

const TruncatedText = styled.span`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    pointer-events: none;
`;

const StyledInput = styled.input`
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    overflow: hidden;
    z-index: -1;
`;

const StyledBackdrop = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 2.35rem;
    padding-right: ${PADDING_MEDIUM};
    border-radius: ${BORDER_RADIUS_2};
    pointer-events: none;

    ${props =>
        props.isFileSelected &&
        `
        justify-content: left;
        background-color: rgba(0, 0, 0, 0.1);
        padding-right: 2.35rem;
        `}

    ${props =>
        props.variant === 'normal' &&
        `
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: ${FONT_SIZE_TEXT_MEDIUM};
        padding: ${PADDING_MEDIUM};
        background: transparent;
        `}
`;

const StyledIconContainer = styled(IconContainer)`
    svg {
        width: 24px !important;
        height: 24px !important;
        font-size: 24px !important;
    }

    ${props =>
        props.isSingleFile &&
        props.variant === 'inline' &&
        `
        svg {
            width: 18px !important;
            height: 18px !important;
            font-size: 18px !important;
        }
    `}

    ${props =>
        props.iconPosition === 'left' &&
        `
        left: ${props.readOnly ? 0 : '0.8rem'};
    `}
    ${props =>
        props.iconPosition === 'right' &&
        `
        right: ${props.readOnly ? 0 : '0.3rem'};
    `}

    ${props =>
        props.variant === 'normal' &&
        `
        position: static;
        width: 64px;
        height: auto;
        margin-bottom: ${MARGIN_X_SMALL};
        svg {
            width: 64px !important;
            height: 64px !important;
            font-size: 64px !important;
        }
        `}
`;

const StyledButtonIcon = styled(ButtonIcon)`
    width: unset;
    height: unset;
    pointer-events: auto;

    svg {
        pointer-events: none;
    }
`;

export {
    StyledContainer,
    StyledDropzone,
    StyledInput,
    TruncatedText,
    StyledBackdrop,
    StyledIconContainer,
    StyledButtonIcon,
};
