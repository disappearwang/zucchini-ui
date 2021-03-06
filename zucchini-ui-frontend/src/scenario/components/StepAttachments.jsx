import PropTypes from 'prop-types';
import React from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

import PanelWithTitle from '../../ui/components/PanelWithTitle';


export default class StepAttachments extends React.PureComponent {

  buildUrlForAttachment = (attachmentId) => {
    const { scenarioId } = this.props;
    // TODO Find a better way to build the URL
    return `${configuration.backendBaseUri}/api/scenarii/${scenarioId}/attachments/${attachmentId}`;
  };

  render() {
    const { attachments } = this.props;

    const items = attachments.map((attachment, index) => {
      return (
        <ListGroupItem key={attachment.id}>
          <a href={this.buildUrlForAttachment(attachment.id)} download>
            Pièce-jointe #{index + 1}
          </a>
        </ListGroupItem>
      );
    });

    return (
      <PanelWithTitle title="Pièces jointes" bsStyle="default">
        <ListGroup fill>
          {items}
        </ListGroup>
      </PanelWithTitle>
    );
  }

}

StepAttachments.propTypes = {
  scenarioId: PropTypes.string.isRequired,
  attachments: PropTypes.array.isRequired,
};
