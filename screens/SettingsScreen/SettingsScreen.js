import * as React from "react";
import { Picker } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled, { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme, colorOptions } from "../../store/theme";
import { changeBaseTheme, changeColorTheme} from './../../actions/theme-action';

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
`;

const Header = styled.View`
  padding-top: 10;
  padding-bottom: 10;
  padding-left: 10;
  padding-right: 10;
  background-color: ${props => props.theme.PRIMARY_COLOR};
`;

const HeaderText = styled.Text`
  font-size: 24;
  color: ${props => props.theme.PRIMARY_FOREGROUND_COLOR};
  font-family: ${props => props.theme.PRIMARY_FONT_FAMILY};
`;

const Body = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  padding-top: 10;
  padding-bottom: 10;
  padding-left: 10;
  padding-right: 10;
`;

const Segment = styled.View`
  padding-top: 10;
  padding-bottom: 10;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`;

const Icon = styled.Image`
  height: 60;
  width: 60;
`;
const Title = styled.Text`
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
  font-size: ${props => props.theme.FONT_SIZE_MASSIVE};
  font-family: ${props => props.theme.PRIMARY_FONT_FAMILY};
`;

const Description = styled.Text`
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
  font-size: ${props => props.theme.FONT_SIZE_MEDIUM};
  font-family: ${props => props.theme.PRIMARY_FONT_FAMILY};
  padding-top: 20;
`;

const ItemPicker = styled.Picker`
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
  padding-top: 20;
`;


class SettingsScreen extends React.Component {
  
  static navigationOptions = {
    header: null,
  }; 
  
  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <Container>
          <Header>
            <HeaderText>Page Settings</HeaderText>
          </Header>
          <Body>
            <Segment>
              <Icon
                source={{
                  uri: "https://img.icons8.com/dusk/50/000000/settings.png"
                }}
              />
            </Segment>

            <Segment>
              <Title>Settings  Page</Title>
              <Description>
                Set the Theme and Color of the App.
              </Description>
            </Segment>

            <Segment>
              <ItemPicker
                onValueChange={(itemValue, itemIndex) =>
                  //make redux action to change the light or dark theme
                  itemValue !== 0 && this.props.changeBaseTheme(itemValue)
                }
                selectedValue={null}
              >
                <Picker.Item label="Please select an base theme" value="0" />
                <Picker.Item label="Dark" value={darkTheme} />
                <Picker.Item label="Light" value={lightTheme} />
              </ItemPicker>
            </Segment>
            <Segment>
              <ItemPicker
                style={{}}
                onValueChange={(itemValue, itemIndex) =>
                  //make redux action to change the accent color theme
                  this.props.changeColorTheme(itemValue)
                }
              >
                <Picker.Item label="Please select an color theme" value="0" />
                {Object.keys(colorOptions).map((option, i) => (
                  //create options for each color option in our theme.js file
                  <Picker.Item
                    key={i}
                    label={option}
                    value={colorOptions[option]}
                  />
                ))}
              </ItemPicker>
            </Segment>
          </Body>
        </Container>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  theme: state.themeReducer.theme
});

const mapDispatchToProps = dispatch => ({
  changeBaseTheme: bindActionCreators(changeBaseTheme, dispatch),
  changeColorTheme: bindActionCreators(changeColorTheme, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsScreen);
