import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, ListGroupItem, TabContent, TabPane } from 'reactstrap'
import ReactMarkdown from "react-markdown";
import { IconLookup, findIconDefinition } from "@fortawesome/fontawesome-svg-core";

  const imageDiv = (image: string, altText: string) => {
    if (!image) { return }
    return (
      // <div className={this.props.active ? "col" : "col-12"}>
      <img
        width="100%"
        style={{ objectFit: "cover" }}
        src={require("../assets" + image)}
        alt={altText}
        className="pb-3"
      />
      // </div>
    );
  };

  const renderTitle = (active: boolean, icon: object, name: string, date: string, tags: [string], location: string) => {
    if (active) {
      return (
        <div className="text-center">
          <h4>
            <FontAwesomeIcon icon={findIconDefinition(icon as IconLookup)} />
            <br />{" "}
            <span dangerouslySetInnerHTML={{ __html: name }} />
            <br />
            <small className="text-muted">
              {`${location}, ${date}`}
            </small>
          </h4>
          <div>
            {tags.map(tag => {
              return <span className="badge badge-primary mx-1">{tag}</span>;
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h4>
            <FontAwesomeIcon icon={findIconDefinition(icon as IconLookup)} />{" "}
            <span dangerouslySetInnerHTML={{ __html: name }} />
            <br />
            <small className="text-muted">{location}</small>
          </h4>
        </div>
      );
    }
  };

    export default (props: { 
      active: boolean, 
      hidden: boolean, 
      image: string,
      altText: string,
      link: string,
      icon: { prefix: string, iconName: string },
      location: string,
      name: string,
      project_name: string,
      description: string,
      summary: string,
      date: string, 
      tags: [string],
      onClick: Function,
      id: number
    }) => { 
      console.log(props.id)
      return (
      <TabPane tabId={props.id} className={`flex-column justify-content-center ${props.active ? 'd-flex' : 'd-none'}`}>
        {imageDiv(props.image, props.altText)}
          {renderTitle(props.active, props.icon, props.name, props.date, props.tags, props.location)}
          <div>
            <ReactMarkdown
              escapeHtml={false}
              source={
                props.active ? props.description : props.summary
              }
              className="card-text"
            />
          </div>
          <a
            href={props.link}
            className="btn btn-primary w-100"
            target="_blank"
            rel="noopener noreferrer"
            style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
          >
            <FontAwesomeIcon icon="angle-double-right" /> More
          </a>
      </TabPane>
    );
  }
