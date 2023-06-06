import * as React from 'react'
import { Container, HeaderWrapper, PageButton, ContentWrapper } from './style'

StepStack = (comp) => (
    <Container>
        <HeaderWrapper>
            {comp.back ?
                <PageButton title="Back"
                    onPress={() => { comp.navigation.navigate(comp.back) }}
                />: false
            }
            {comp.next ?
                <PageButton title="Next"
                    onPress={() => { comp.navigation.navigate(comp.next) }}
                />: false
            }
        </HeaderWrapper>
        <ContentWrapper>
            {comp.children}
        </ContentWrapper>
    </Container>
)

export default StepStack;