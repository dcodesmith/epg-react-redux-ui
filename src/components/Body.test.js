import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { sortBy } from 'lodash';
import { shallow } from 'enzyme';

import Body from './Body';
import ChannelLogo from './ChannelLogo';
import ProgrammeItem from './ProgrammeItem';

const onModalShowSpy = sinon.spy();
const mockProgrammes = {
  fv56lj0: [{
    updatedAt: "2017-06-03T20:05:34.181Z",
    createdA: "2017-06-03T20:05:34.181Z",
    show: "News",
    date: "2016-03-03T00:00:00.000Z",
    startTime: "00:00",
    endTime: "03:00",
    genre: "apple",
    type: "blue",
    synopsis: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the",
    frequency: "23",
    season: 0,
    numberOfEpisodes: 0,
    channel: {
      updatedAt: "2016-10-01T19:02:35.260Z",
      createdAt: "2016-10-01T19:02:35.260Z",
      code: "fv56lj0",
      name: "BBC One",
      id: "57f0084bf3a725778738648a"
    },
    id: "5933168e724f166608682b8e"
  }, {
    updatedAt: "2017-06-03T20:05:34.187Z",
    createdAt: "2017-06-03T20:05:34.187Z",
    show: "Man on Fire",
    date: "2016-03-03T00:00:00.000Z",
    startTime: "03:00",
    endTime: "06:00",
    genre: "strawberry",
    type: "brown",
    synopsis: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the",
    frequency: "38",
    season: 0,
    numberOfEpisodes: 0,
    channel: {
      updatedAt: "2016-10-01T19:02:35.260Z",
      createdAt: "2016-10-01T19:02:35.260Z",
      code: "fv56lj0",
      name: "BBC One",
      id: "57f0084bf3a725778738648a"
    },
    id: "5933168e724f166608682b8f"
  }],
  hq09ky1: [{
    updatedAt: "2017-06-03T20:05:34.190Z",
    createdAt: "2017-06-03T20:05:34.190Z",
    show: "Boxing Hour",
    date: "2016-03-03T00:00:00.000Z",
    startTime: "00:00",
    endTime: "02:00",
    genre: "strawberry",
    type: "green",
    synopsis: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the",
    frequency: "39",
    season: 0,
    numberOfEpisodes: 0,
    channel: {
      updatedAt: "2016-10-01T19:02:35.267Z",
      createdAt: "2016-10-01T19:02:35.267Z",
      code: "hq09ky1",
      name: "ITV 1",
      id: "57f0084bf3a725778738648b"
    },
    id: "5933168e724f166608682b94"
  }, {
    updatedAt: "2017-06-03T20:05:34.190Z",
    createdAt: "2017-06-03T20:05:34.190Z",
    show: "East Enders",
    date: "2016-03-03T00:00:00.000Z",
    startTime: "02:01",
    endTime: "04:00",
    genre: "strawberry",
    type: "green",
    synopsis: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the",
    frequency: "22",
    season: 0,
    numberOfEpisodes: 0,
    channel: {
      updatedAt: "2016-10-01T19:02:35.267Z",
      createdAt: "2016-10-01T19:02:35.267Z",
      code: "hq09ky1",
      name: "ITV 1",
      id: "57f0084bf3a725778738648b"
    },
    id: "5933168e724f166608682b95"
  }]
};

const DEFAULT_PROPS = {
  programmes: mockProgrammes,
  onModalShow: onModalShowSpy,
  transformStyle: {}
};

const EXPECTED_CHANNELS = Object.keys(mockProgrammes);

const render = (testProps = {}) => {
  const props = Object.assign({}, DEFAULT_PROPS, testProps);

  return shallow(<Body { ...props } />);
};

describe('Body', () => {
  describe('Given a Body component', () => {
    describe('When rendered', () => {
      let component;

      beforeEach(() => {
        component = render();
      });

      it('should have the expected classes', () => {
        expect(component.hasClass('programme-guide__body')).to.be.true;
        expect(component.hasClass('epg-fade')).to.be.true;
      });

      it('should render 2 rows', () => {
        const channelRows = component.find('.programme-guide__row');

        expect(channelRows.length).to.equal(EXPECTED_CHANNELS.length);

        channelRows.forEach((channelRow, index) => {
          expect(channelRow.props().className).to.contain(EXPECTED_CHANNELS[index]);
        });
      });

      it('should render 2 row headers', () => {
        const channelRowHeaders = component.find('.programme-guide__row__header');

        expect(channelRowHeaders.length).to.equal(EXPECTED_CHANNELS.length);
      });

      it('should render 2 ChannelLogo components', () => {
        const channelRowHeaders = component.find('.programme-guide__row__header');

        channelRowHeaders.forEach((channelRowHeader, index) => {
          const ChannelLogoComponent = channelRowHeader.find(ChannelLogo);

          expect(ChannelLogoComponent.props().channel).to.equal(EXPECTED_CHANNELS[index]);
        });
      });

      it('should render 2 item row', () => {
        const channelRowItems = component.find('.programme-guide__row__items');

        expect(channelRowItems.length).to.be.equal(EXPECTED_CHANNELS.length);
      });

      // @TODO -
      it('should render 4 Programmes components', () => {
        const ProgrammeItemComponents = component.find(ProgrammeItem);

        expect(ProgrammeItemComponents.length).to.equal(4);

        ProgrammeItemComponents.forEach((ProgrammeItemComponent, index) => {
          const { programme, onModalShow } = ProgrammeItemComponent.props();
        });
      });
    });
  });
});
