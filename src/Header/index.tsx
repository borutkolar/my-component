import React, { useState } from "react";
import Link from "next/link"
import clsx from "clsx";
// import { BackgroundExtension } from "../BackgroundExtension";
import { Container, LogoWrapper, AdditionalText } from "./style";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

interface Props {
  backgroundColor: string;
  backgroundImage: string;
  additionalTextDescription?: string;
  additionalTextTitle?: string;
  shopBackgroundImage?: string;
}

export function Header({
  additionalTextTitle,
  additionalTextDescription,
  backgroundColor,
  backgroundImage,
  shopBackgroundImage,
}: Props) {
  const [additionalTextExpanded, setAdditionalTextExpanded] = useState(false)

  const chevronIcon = additionalTextExpanded ? (
    <FaChevronUp onClick={() => setAdditionalTextExpanded(false)} />
  ) : (
      <FaChevronDown onClick={() => setAdditionalTextExpanded(true)} />
    );
  const chevron = additionalTextDescription ? chevronIcon : null;

  return (
    <Container backgroundColor={backgroundColor}>
      <LogoWrapper backgroundImage={shopBackgroundImage}>
        <Link href="/">
          <a>
            <img src="logo.svg" />
          </a>
        </Link>
        <img src="shopping-cart.svg" />
      </LogoWrapper>
      {additionalTextTitle && (
        <AdditionalText className={clsx(additionalTextExpanded && "expanded")}>
          <div>
            <span>{additionalTextTitle}</span>
            {chevron}
          </div>
          <p>{additionalTextDescription}</p>
        </AdditionalText>
      )}
      {/* <BackgroundExtension backgroundImage={backgroundImage} /> */}
    </Container>
  );
}