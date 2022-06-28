import './Flight.css'
export default function Flight({item}) {



    return (<div className={'spaceX'}>
        {item.flight_number}.
        {item.mission_name}  year: {item.launch_year}
        <img src={item.links.mission_patch_small} alt="link"/>

    </div>)
}