import React from "react";
import { Input, Icon, Button } from "antd";

import styles from "./styles.less";

interface EditableTextProps {
  defaultValue?: string;
  placeholder?: string;
  editable?: boolean;
  onSave: (value: string) => void;
}

interface EditableTextState {
  editing: boolean;
}

class EditableText extends React.Component<EditableTextProps, EditableTextState> {
  public state: EditableTextState = {
    editing: false
  };

  private inputNode: Input | null = null;

  public componentDidMount() {
    document.addEventListener("keyup", this.handleKeyupEvent);
    document.addEventListener("mousedown", this.handleClickEvent);
  }

  public componentWillUnmount() {
    document.removeEventListener("keyup", this.handleKeyupEvent);
  }

  public render() {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>{this.renderEditableField()}</div>
      </div>
    );
  }

  private renderEditableField = () => {
    const { editing } = this.state;
    const { defaultValue, placeholder, editable } = this.props;

    if (editable && editing) {
      return (
        <Input
          autoFocus
          defaultValue={defaultValue}
          placeholder={placeholder}
          onPressEnter={(evt) => this.handleOnSave(evt.currentTarget.value)}
          ref={(node) => this.inputNode = node}
        />
      );
    }

    return (
      <div
        className={editable ? styles.editableText : styles.notEditable}
        onClick={this.enableEditing}
      >
        {defaultValue || placeholder}
        {editable && <Icon type="edit" />}
      </div>
    );
  }

  private enableEditing = () =>
    this.setState({ editing: true })

  private handleKeyupEvent = (evt: KeyboardEvent) => {
    if (evt.keyCode === 27) {
      this.setState({ editing: false });
    }
  }

  private handleClickEvent = (evt: MouseEvent) => {
    const { editing } = this.state;
    if (editing && this.inputNode && !this.inputNode.input.contains(evt.target as Node)) {
      this.handleOnSave(this.inputNode.input.value);
    }
  }

  private handleOnSave = (value: string) => {
    const { onSave } = this.props;

    onSave(value);
    this.setState({ editing: false });
  }
}

export default EditableText;
