import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Breadcrumb from '../Components/Breadcrumb';
import Collaboration from '../Components/About/Collaboration';
import Contacts from '../Components/About/Contacts';
import EasterPrize from '../Components/About/EasterPrize';
import Ozons from '../Components/About/Ozons';
import SprintO from '../Components/About/SprintO';
import 'react-tabs/style/react-tabs.css';

function About() {
    const breadcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'About' }
    ];

    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col">
                    <Breadcrumb paths={breadcrumbPaths} />
                </div>
            </div>
            <div className="row mb-5">
                <div className="col">
                    <Tabs>
                        <TabList>
                            <Tab><p className="lead mb-1 fw-bolder">Easter Prize</p></Tab>
                            <Tab><p className="lead mb-1 fw-bolder">Sprint-O</p></Tab>
                            <Tab><p className="lead mb-1 fw-bolder">Ozons</p></Tab>
                            <Tab><p className="lead mb-1 fw-bolder">Collaboration</p></Tab>
                        </TabList>
                        <TabPanel>
                            <EasterPrize />
                        </TabPanel>
                        <TabPanel>
                            <SprintO />
                        </TabPanel>
                        <TabPanel>
                            <Ozons />
                        </TabPanel>
                        <TabPanel>
                            <Collaboration />
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Contacts />
                </div>
            </div>
        </div>
    );
}

export default About;