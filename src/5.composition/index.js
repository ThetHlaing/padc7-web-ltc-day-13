import React, { Component } from "react";

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
      {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog(){
  return (
    <Dialog 
    title="Title Here"
    message="Message is here as well"/>
  );
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function ChatApp() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}

function Contacts(props) {
  return <div>Contact List here</div>
}

function Chat(props) {
    return <div>Chat box here</div>
}

export {WelcomeDialog,ChatApp};
