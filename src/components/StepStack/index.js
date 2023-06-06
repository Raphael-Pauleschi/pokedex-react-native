import * as React from 'react'
import { Container, HeaderWrapper, PageButton, ContentWrapper } from 'react-native'

(comp) => (
    <Container>
        <HeaderWrapper>
            {comp.back &
                <PageButton title="Back"
                    onPress={() => { comp.navigation.navigate(comp.back) }}
                />
            }
            {comp.next &
                <PageButton title="Next"
                    onPress={() => { comp.navigation.navigate(comp.next) }}
                />
            }
        </HeaderWrapper>
        <ContentWrapper>
            {comp.children}
        </ContentWrapper>
    </Container>
)