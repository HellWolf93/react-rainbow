import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autosize from 'autosize';
import withReduxForm from './../../libs/hocs/withReduxForm';
import { uniqueId } from './../../libs/utils';
import RenderIf from '../RenderIf';
import Label from './../Input/label';
import StyledContainer from './styled/container';
import StyledTextareaContainer from './styled/textareaContainer';
import StyledTextarea from './styled/textarea';
import StyledBottomHelp from '../Input/styled/helpText';
import StyledError from '../Input/styled/errorText';

/**
 * Textarea inputs are used for freeform data entry.
 * @category Form
 */
class Textarea extends Component {
    constructor(props) {
        super(props);
        this.textareaRef = React.createRef();
        this.textareaId = uniqueId('textarea');
        this.inlineTextLabelId = uniqueId('inline-text-label');
        this.errorMessageId = uniqueId('error-message');
        this.updateFocus = this.updateFocus.bind(this);
        this.state = {
            isFocused: false,
        };
    }

    componentDidMount() {
        const { grow } = this.props;
        if (grow) {
            return autosize(this.textareaRef.current);
        }
        return null;
    }

    getInlineTextLabelId() {
        const { bottomHelpText } = this.props;
        if (bottomHelpText) {
            return this.inlineTextLabelId;
        }
        return undefined;
    }

    getErrorMessageId() {
        const { error } = this.props;
        if (error) {
            return this.errorMessageId;
        }
        return undefined;
    }

    /**
     * Sets focus on the element.
     * @public
     */
    focus() {
        this.textareaRef.current.focus();
    }

    /**
     * Sets click on the element.
     * @public
     */
    click() {
        this.textareaRef.current.click();
    }

    /**
     * Sets blur on the element.
     * @public
     */
    blur() {
        this.textareaRef.current.blur();
    }

    updateFocus(isFocused, handler) {
        return (...args) => {
            this.setState({ isFocused });
            handler(...args);
        };
    }

    render() {
        const {
            style,
            className,
            onChange,
            onClick,
            onFocus,
            onBlur,
            onPaste,
            value,
            readOnly,
            label,
            error,
            placeholder,
            disabled,
            maxLength,
            minLength,
            bottomHelpText,
            required,
            rows,
            id,
            labelAlignment,
            hideLabel,
            name,
            header,
            footer,
            variant,
        } = this.props;

        return (
            <StyledContainer className={className} style={style} id={id}>
                <Label
                    label={label}
                    labelAlignment={labelAlignment}
                    hideLabel={hideLabel}
                    required={required}
                    inputId={this.textareaId}
                    readOnly={readOnly}
                    id={this.getInlineTextLabelId()}
                />
                <StyledTextareaContainer
                    error={error}
                    readOnly={readOnly}
                    disabled={disabled}
                    variant={variant}
                    isFocused={this.state.isFocused}
                >
                    <RenderIf isTrue={header}>{header}</RenderIf>
                    <StyledTextarea
                        error={error}
                        id={this.textareaId}
                        name={name}
                        placeholder={placeholder}
                        disabled={disabled}
                        required={required}
                        maxLength={maxLength}
                        minLength={minLength}
                        onChange={onChange}
                        onClick={onClick}
                        onFocus={this.updateFocus(true, onFocus)}
                        onBlur={this.updateFocus(false, onBlur)}
                        onPaste={onPaste}
                        readOnly={readOnly}
                        rows={rows}
                        value={value}
                        aria-labelledby={this.getInlineTextLabelId()}
                        aria-describedby={this.getErrorMessageId()}
                        ref={this.textareaRef}
                    />
                    <RenderIf isTrue={footer}>{footer}</RenderIf>
                </StyledTextareaContainer>
                <RenderIf isTrue={bottomHelpText}>
                    <StyledBottomHelp>{bottomHelpText}</StyledBottomHelp>
                </RenderIf>
                <RenderIf isTrue={error}>
                    <StyledError id={this.getErrorMessageId()}>{error}</StyledError>
                </RenderIf>
            </StyledContainer>
        );
    }
}

Textarea.propTypes = {
    /** Text label for the Textarea. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Describes the position of the Textarea label. Options include left, center and right.
     * This value defaults to center. */
    labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
    /** A boolean to hide the Textarea label */
    hideLabel: PropTypes.bool,
    /** The name of the Textarea */
    name: PropTypes.string,
    /** The value of the Textarea, also used as the default value during init. */
    value: PropTypes.string,
    /** Text that is displayed when the field is empty, to prompt the user for a valid entry. */
    placeholder: PropTypes.string,
    /** The maximum number of characters allowed in the Textarea. */
    maxLength: PropTypes.number,
    /** The minimum number of characters allowed in the Textarea. */
    minLength: PropTypes.number,
    /** This make to Textarea grow. This value defaults to false. */
    grow: PropTypes.bool,
    /** Shows the help message below the Textarea. */
    bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that the textarea field must be filled out before submitting the form.
     * This value defaults to false. */
    required: PropTypes.bool,
    /** Specifies that the textarea field must be filled out before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that the textarea element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** The number of visible text lines for the control. The value by default is 3. */
    rows: PropTypes.number,
    /** Specifies that the textarea field is read-only. This value defaults to false. */
    readOnly: PropTypes.bool,
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** The action triggered when the element is clicked. */
    onClick: PropTypes.func,
    /** The action triggered when the element receives focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /** Event fired when the user paste on the Textarea */
    onPaste: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The variant changes the appearance of the Textarea. Accepted variants include default,
     * and shaded. This value defaults to default. */
    variant: PropTypes.oneOf(['default', 'shaded']),
    /** The id of the outer element. */
    id: PropTypes.string,
    /** It is what will be displayed at the top of the component. */
    header: PropTypes.node,
    /** It is what will be displayed at the bottom of the component. */
    footer: PropTypes.node,
};

Textarea.defaultProps = {
    label: undefined,
    value: undefined,
    name: undefined,
    placeholder: null,
    maxLength: undefined,
    minLength: undefined,
    grow: false,
    bottomHelpText: null,
    required: false,
    error: null,
    disabled: false,
    rows: 3,
    readOnly: false,
    onChange: () => {},
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onPaste: () => {},
    className: undefined,
    style: undefined,
    variant: 'default',
    id: undefined,
    labelAlignment: 'center',
    hideLabel: false,
    header: undefined,
    footer: undefined,
};

export default withReduxForm(Textarea);
