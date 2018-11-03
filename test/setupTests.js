import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

//Need this file when running create-react-app for Jest configuration.
//If not using create-react-app, need to tell Jest where configuration file is.
