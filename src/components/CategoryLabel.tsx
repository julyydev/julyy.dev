import styled from 'styled-components';

interface Props {
    text: string;
}

const CategoryLabel = (props: Props) => {
    const { text } = props;
    return (
        <Label
            onClick={() => {
                location.href = `/blog?category=${text.toLowerCase()}`;
            }}
        >
            {text}
        </Label>
    );
};

export default CategoryLabel;

const Label = styled.div`
    background-color: #e4deff;
    color: #9980fa;
    /* border: 1px solid #9980fa; */
    border-radius: 20px;
    font-size: 14px;
    padding: 4px 8px;
    margin-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
