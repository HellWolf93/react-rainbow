import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import iconNameUtilityPropType from './../../propTypes/iconNameUtilityPropType';
import AvatarContent from './avatarContent';
import AssistiveText from './../AssistiveText';

/**
* An avatar component represents an object or entity
*/
export default function Avatar(props) {
    const {
        className,
        style,
        variant,
        size,
        assistiveText,
        ...rest
    } = props;
    const getContainerClassNames = () => classnames(
        'slds-avatar',
        { 'slds-avatar_circle': variant === 'circle' },
        `slds-avatar_${size}`,
        className,
    );

    return (
        <span className={getContainerClassNames()} style={style}>
            <AvatarContent {...rest} />
            <AssistiveText text={assistiveText} />
        </span>
    );
}

Avatar.propTypes = {
    /** The URL for the image.
    It take precedence over the initials and icon. */
    src: PropTypes.string,
    /** If the record name contains two words, like first and last name,
    * use the first capitalized letter of each. For records that only have a single word name,
    * use the first two letters of that word using one capital and one lower case letter. */
    initials: PropTypes.string,
    /** The Lightning Design System name of the icon used as a fallback when
    * the image fails to load. Names are written in the format {sprite_name}:{icon_name}
    * where {sprite_name} is the category, and {icon_name} is the specific icon to be displayed.
    * Only utility icons can be used in this component. */
    iconName: iconNameUtilityPropType,
    /** The variant changes the shape of the avatar. Valid values are empty,
    * default, and circle. This value defaults to default. */
    variant: PropTypes.oneOf([
        'default', 'circle',
    ]),
    /** The size of the avatar. Valid values are x-small, small, medium, and large.
    * This value defaults to medium. */
    size: PropTypes.oneOf([
        'x-small',
        'small',
        'medium',
        'large',
    ]),
    /** The variant of the initials. Only make sense when initials is used. */
    initialsVariant: PropTypes.oneOf([
        'default', 'inverse',
    ]),
    /** Displays tooltip text when the mouse moves over the element. */
    title: PropTypes.string,
    /** A description for assistive sreen readers. */
    assistiveText: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

Avatar.defaultProps = {
    src: undefined,
    initials: undefined,
    iconName: 'standard:user',
    variant: 'default',
    size: 'medium',
    initialsVariant: 'default',
    title: undefined,
    assistiveText: undefined,
    className: undefined,
    style: undefined,
};
