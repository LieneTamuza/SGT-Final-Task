import aboutSprintO from '../../Assets/Images/about_sprint_o.JPG';

function SprintO() {
    return (
        <div className="container">
            <div class="row">
                <div class="col-12 col-sm-4">
                    <img className="img-fluid" src={aboutSprintO} alt="Orienteering control and female running in the background" />
                </div>
                <div class="col-12 col-sm-8">
                    <p>Sprint orienteering is about thinking and racing hard simultaneously, focusing on quick
                        decision making. These events mainly take place in urban areas. They are fairly simple
                        to navigate at a walk or a slow jog, but the task is more demanding at high speed,
                        especially when faced with constant changes of direction and route choice.</p>
                    <p>It will generally take 15-30 minutes to complete a course, where you must find all the
                        controls in a set order, in the fastest possible time. Course lengths vary from 2 km to
                        4 km. These events use the Sportident electronic timing system which enables you to
                        compare the time it took to get to each control with others on your course.</p>
                </div>
            </div>
        </div>
    );
}

export default SprintO;