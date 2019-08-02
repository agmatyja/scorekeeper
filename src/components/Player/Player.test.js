import Player from './Player';
import React from 'react';
import { shallow } from 'enzyme';

it('should call onPlayerScoreChange with 1 when plus button is clicked', () => {
  const mockedOnPlayerScoreChange = jest.fn();
  const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

  const plusButton = playerComponent.find('.Player__button').first();

  plusButton.simulate('click');

  expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
});


it('should call onPlayerScoreChange with -1 when minus button is clicked', () => {
  const mockedOnPlayerScoreChange = jest.fn();
  const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

  const minusButton = playerComponent.find('.Player__button').last();

  minusButton.simulate('click');

  expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);
});

it('renders without crashing', () => {
  shallow(<Player />);
});

it('renders correct name', () => {
  const playerNamePassed = 'Ania';
  const playerComponent = shallow(<Player name={playerNamePassed} />);

  const playerNameRendered = playerComponent.find('.Player__name').text();

  expect(playerNameRendered).toEqual(playerNamePassed);
});

it('renders Players score', () => {
  const playerScorePassed = 5;

  const playerScore = shallow(<Player score={playerScorePassed} />);

  const playerScoreRendered = parseInt(playerScore.find('.Player__score').text());

  expect(playerScoreRendered).toEqual(playerScorePassed);
});

it('should call onPlayerRemove when remove button is clicked', () => {
  const mockedOnPlayerRemove = jest.fn();
  const playerComponent = shallow(<Player onPlayerRemove={mockedOnPlayerRemove} />);

  const removeButton = playerComponent.find('.Player__remove').last();

  removeButton.simulate('click');

  expect(mockedOnPlayerRemove).toBeCalled();
});

