import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';


const ButtonList = () => (
  <ButtonToolbar>
    {['right'].map(placement => (
      <OverlayTrigger
        key={placement}
        placement={placement}
        overlay={
          <Tooltip id={`tooltip-${placement}`}>
            Tooltip on <strong>{placement}</strong>.
        </Tooltip>
        }
      >
        <Button variant="secondary">Tooltip on {placement}</Button>
      </OverlayTrigger>
    ))}
  </ButtonToolbar>
)

export default ButtonList;
