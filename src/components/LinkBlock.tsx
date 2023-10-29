import type React from 'react';
import styled from 'styled-components';
import { themedPalette } from '@/styles/themes';

interface Props {
    href: string;
    children: React.ReactNode;
}
const LinkBlock = (props: Props) => {
    const { href, children } = props;
    return <Wrapper href={href}>{children}</Wrapper>;
};

export default LinkBlock;

const Wrapper = styled.a`
    color: ${themedPalette.text3};
`;
