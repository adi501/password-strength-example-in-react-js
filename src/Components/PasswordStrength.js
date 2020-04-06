import React from "react";

class PasswordStrength extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",

      containsEnoughChars: false,

      containsSpecialChars: false,

      containsUpperAndLowerChars: false,

      isPasswordValid: false
    };

    this.handleInput = this.handleInput.bind(this);

    this.toggleRevealPassword = this.toggleRevealPassword.bind(this);

    this.submitPassword = this.submitPassword.bind(this);
  }

  render() {
    return (
      <div style={{ padding: "1rem" }}>
        <div>
          <input
            onChange={this.handleInput}
            type={this.state.isPasswordRevealed ? "text" : "password"}
            value={this.state.password}
          />
          <input
            type="checkbox"
            checked={this.state.isPasswordRevealed}
            onChange={this.toggleRevealPassword}
          />
          Show Password
        </div>

        <div>
          <div
            style={{
              backgroundColor: this.state.hasEnoughChars ? "green" : "red"
            }}
          >
            Minimum 8 characters
          </div>

          <div
            style={{
              backgroundColor: this.state.hasSpecialChars ? "green" : "red"
            }}
          >
            Minimum 1 special character
          </div>

          <div
            style={{
              backgroundColor: this.state.hasUpperAndLowercaseChars
                ? "green"
                : "red"
            }}
          >
            Include 1 uppercase and lowercase letter
          </div>
        </div>

        <button
          disabled={!this.state.isPasswordValid}
          onClick={this.submitPassword}
        >
          Submit
        </button>
      </div>
    );
  }

  handleInput(e) {
    this.setState({ password: e.target.value });

    this.setState(prevState => ({
      hasEnoughChars: prevState.password.length >= 8,

      hasUpperAndLowercaseChars:
        /[a-z]/.test(prevState.password) && /[A-Z]/.test(prevState.password),

      hasSpecialChars: /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(
        prevState.password
      )
    }));

    this.setState(prevState => ({
      isPasswordValid:
        prevState.hasEnoughChars &&
        prevState.hasUpperAndLowercaseChars &&
        prevState.hasSpecialChars
    }));
  }

  toggleRevealPassword() {
    this.setState({ isPasswordRevealed: !this.state.isPasswordRevealed });
  }

  submitPassword() {
    alert(`Password submitted: ${this.state.password}`);
  }
}

export default PasswordStrength;
