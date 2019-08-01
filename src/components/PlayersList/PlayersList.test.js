import PlayersList from './PlayersList';
import React from 'react';
import { shallow } from 'enzyme';
import Player from '../Player/Player';

const players = [
    {
        name: 'Kunegunda',
        score: 5
    },
    {
        name: 'Antoś',
        score: 0
    }
]

it('renders without crashing', () => {
	const playerComponent = shallow(<PlayersList players={players} />);
	const expectedPlayersNumber = playerComponent.find(Player).length;
	expect(expectedPlayersNumber).toEqual(2);
});



it('renders correct number of players', () => {	
    const mockedOnScoreUpdate = jest.fn();

    const playerComponent = shallow(<PlayersList players={players} onScoreUpdate={mockedOnScoreUpdate} />);

    const firstPlayer = playerComponent.find(Player).first();

    const onPlayerScoreChange = firstPlayer.prop('onPlayerScoreChange');

    onPlayerScoreChange(10);

    expect(mockedOnScoreUpdate).toBeCalledWith(0, 10);
});

