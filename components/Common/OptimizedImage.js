import styled from "styled-components";
import { Children, isValidElement, cloneElement } from "react";
import { CustomImage } from "@/components/Common/StyledComponents";
import { common } from "@/data/images";
import { getDescendantProp } from "@/lib/helpers";

const Picture = styled.picture``;

const PictureSource = styled.source.attrs((props) => ({
  srcSet: props.srcSet,
  type: props.type,
}))``;

const OptimizedImage = ({
  name,
  alt,
  children,
  fullWidth = false,
  category = null,
  splitCharacter = "/",
}) => {
  const isNestedImageName = name && name.split(splitCharacter).length > 1;
  const propertyToFind = category ? `${category}/${name}` : name;

  const targetImage = isNestedImageName
    ? getDescendantProp(common, propertyToFind, splitCharacter)
    : common[propertyToFind];

  const childrenWithProps = !children
    ? null
    : Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { src: targetImage, alt: alt || name });
        }
        return child;
      });

  return (
    <Picture>
      {targetImage.webp && (
        <PictureSource srcSet={targetImage.webp} type="image/webp" />
      )}
      <PictureSource
        srcSet={targetImage}
        type={`image/${targetImage.format}`}
      />

      {childrenWithProps || (
        <CustomImage
          width={fullWidth ? "100%" : null}
          src={targetImage}
          alt={alt || name}
        />
      )}
    </Picture>
  );
};

export default OptimizedImage;
