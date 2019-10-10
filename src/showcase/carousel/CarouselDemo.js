import React, {Component} from 'react';
import {Carousel} from '../../components/carousel/Carousel';
import {CarService} from '../service/CarService';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import {Button} from '../../components/button/Button';

export class CarouselDemo extends Component {

    constructor() {
        super();
        this.state = { 
            cars: []
        };
        this.carservice = new CarService();
        this.carTemplate = this.carTemplate.bind(this);

        this.responsiveSettings = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    carTemplate(car) {
        return (
            <div className="car-details">
                <div className="p-grid p-nogutter">
                    <div className="p-col-12">
                        <img src={`showcase/resources/demo/images/car/${car.brand}.png`} alt={car.brand} />
                    </div>
                    <div className="p-col-12 car-data">
                        <div className="car-title">{car.brand}</div>
                        <div className="car-subtitle">{car.year} | {car.color}</div>

                        <div className="car-buttons">
                            <Button icon="pi pi-search" className="p-button-secondary" />
                            <Button icon="pi pi-star" className="p-button-secondary" />
                            <Button icon="pi pi-cog" className="p-button-secondary" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const basicHeader = <h2>Basic</h2>;
        const customHeader = <h2>Circular, AutoPlay, 3 Items per Page and Scroll by 1</h2>
        const verticalHeader = <h2>Vertical</h2>

        return (
            <div className="carousel-demo">
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Carousel</h1>
                        <p>Carousel is a content slider featuring various customization options.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Carousel value={this.state.cars} itemTemplate={this.carTemplate} numVisible={4} numScroll={3} 
                        header={basicHeader} responsive={this.responsiveSettings}></Carousel>

                    <Carousel value={this.state.cars} itemTemplate={this.carTemplate} numVisible={3} numScroll={1} className="custom-carousel"
                        responsive={this.responsiveSettings} header={customHeader} circular={true} autoplayInterval={3000}></Carousel>

                    <Carousel value={this.state.cars} itemTemplate={this.carTemplate} orientation="vertical" style={{width: '400px', marginTop: '2em'}}
                        numVisible={1} numScroll={1} responsive={this.responsiveSettings} verticalContentHeight="330px" header={verticalHeader}></Carousel>
                </div>

                <CarouselDoc />                
            </div>
        );
    }
}

export class CarouselDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }
    
    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {Carousel} from 'primereact/carousel';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>Carousel requires a collection of items as its value along with a template to render each item.</p>

<CodeHighlight className="language-jsx">
{`
<Carousel value={this.state.cars} itemTemplate={this.carTemplate}></Carousel>

`}
</CodeHighlight>
<CodeHighlight className="language-javascript">
{`
constructor() {
    super();
    this.state = { 
        cars: []
    };
    this.carservice = new CarService();
    this.carTemplate = this.carTemplate.bind(this);
}

componentDidMount() {
    this.carservice.getCars().then(data => this.setState({cars: data}));
}

carTemplate(car) {
    // return content;
}

`}
</CodeHighlight>

            <h3>Items per page and Scroll Items</h3>
            <p>Number of items per page is defined using the <i>numVisible</i> property whereas number of items to scroll is defined with the <i>numScroll</i> property.</p>
            <CodeHighlight className="language-jsx">
{`
<Carousel value={this.state.cars} itemTemplate={this.carTemplate} numVisible={3} numScroll={1}></Carousel>

`}
</CodeHighlight>

            <h3>Responsive</h3>
            <p>For responsive design, <i>numVisible</i> and <i>numScroll</i> can be defined using the <i>responsiveOptions</i> property that should be an array of 
            objects whose breakpoint defines the max-width to apply the settings.</p>
            <CodeHighlight className="language-jsx">
{`
<Carousel value={this.state.cars} itemTemplate={this.carTemplate} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions}></Carousel>

`}
</CodeHighlight>

<CodeHighlight className="language-javascript">
{`
const responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];

`}
</CodeHighlight>

            <h3>Header and Footer</h3>
            <p>Custom content projection is available using the <i>header</i> and <i>footer</i> properties.</p>
            <CodeHighlight className="language-jsx">
{`
<Carousel value={this.state.cars} itemTemplate={this.carTemplate} header={<h1>Header</h1>}></Carousel>

`}
</CodeHighlight>

            <h3>Orientation</h3>
            <p>Default layout of the Carousel is horizontal, other possible option is the vertical mode that is configured with the <i>orientation</i> property.</p>
            <CodeHighlight className="language-jsx">
{`
<Carousel value={this.state.cars} itemTemplate={this.carTemplate} orientation="vertical"></Carousel>

`}
</CodeHighlight>

            <h3>AutoPlay and Circular</h3>
            <p>When <i>autoplayInterval</i> is defined in milliseconds, items are scrolled automatically. In addition, for infinite scrolling <i>circular</i> property needs to be enabled. Note that in autoplay mode, circular is enabled by default.</p>

            <h3>Properties</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Default</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>id</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Unique identifier of the element.</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>array</td>
                            <td>null</td>
                            <td>An array of objects to display.</td>
                        </tr>
                        <tr>
                            <td>rows</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Number of rows to fetch in a load event.</td>
                        </tr>
                        <tr>
                            <td>inline</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Defines if the event target to listen the scroll event is the element itself.</td>
                        </tr>
                        <tr>
                            <td>scrollHeight</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Max height of the content area in inline mode.</td>
                        </tr>
                        <tr>
                            <td>loader</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Reference of the target element whose click event loads the data instead of scrolling.</td>
                        </tr>
                        <tr>
                            <td>buffer</td>
                            <td>number</td>
                            <td>0.9</td>
                            <td>Number of buffer size.</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the component.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the component.</td>
                        </tr>
                        <tr>
                            <td>itemTemplate</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Function that gets an item in the value and returns the content for it.</td>
                        </tr>
                        <tr>
                            <td>header</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Label of header.</td>
                        </tr>
                        <tr>
                            <td>footer</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Label of footer.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Events</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>onLazyLoad</td>
                            <td>event.first = First row offset <br />
                                event.rows = Number of rows per page <br /></td>
                            <td>Callback to invoke in lazy mode to load new data.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Styling</h3>
            <p>Following is the list of structural style classes</p>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Element</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>p-datascroller</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-datascroller-header</td>
                            <td>Header section.</td>
                        </tr>
                        <tr>
                            <td>p-datascroller-footer</td>
                            <td>Footer section.</td>
                        </tr>
                        <tr>
                            <td>p-datascroller-content</td>
                            <td>Wrapper of item container.</td>
                        </tr>
                        <tr>
                            <td>p-datascroller-list</td>
                            <td>Item container element.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Dependencies</h3>
                <p>None.</p>
            </div>
            
            </TabPanel>

            <TabPanel header="Source">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/datascroller" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <span>View on GitHub</span>
                </a>
<CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {Carousel} from 'primereact/carousel';
import {Button} from 'primereact/button';
import {CarService} from '../service/CarService';

export class CarouselDemo extends Component {

    constructor() {
        super();
        this.state = { 
            cars: []
        };
        this.carservice = new CarService();
        this.carTemplate = this.carTemplate.bind(this);

        this.responsiveSettings = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    carTemplate(car) {
        return (
            <div className="car-details">
                <div className="p-grid p-nogutter">
                    <div className="p-col-12">
                        <img src={\`showcase/resources/demo/images/car/\${car.brand}.png\`} alt={car.brand} />
                    </div>
                    <div className="p-col-12 car-data">
                        <div className="car-title">{car.brand}</div>
                        <div className="car-subtitle">{car.year} | {car.color}</div>

                        <div className="car-buttons">
                            <Button icon="pi pi-search" className="p-button-secondary" />
                            <Button icon="pi pi-star" className="p-button-secondary" />
                            <Button icon="pi pi-cog" className="p-button-secondary" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const basicHeader = <h2>Basic</h2>;
        const customHeader = <h2>Circular, AutoPlay, 3 Items per Page and Scroll by 1</h2>
        const verticalHeader = <h2>Vertical</h2>

        return (
            <div className="carousel-demo">
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Carousel</h1>
                        <p>Carousel is a content slider featuring various customization options.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Carousel value={this.state.cars} itemTemplate={this.carTemplate} numVisible={4} numScroll={3} 
                        header={basicHeader} responsive={this.responsiveSettings}></Carousel>

                    <Carousel value={this.state.cars} itemTemplate={this.carTemplate} numVisible={3} numScroll={1} className="custom-carousel"
                        responsive={this.responsiveSettings} header={customHeader} circular={true} autoplayInterval={3000}></Carousel>

                    <Carousel value={this.state.cars} itemTemplate={this.carTemplate} orientation="vertical" style={{width: '400px', marginTop: '2em'}}
                        numVisible={1} numScroll={1} responsive={this.responsiveSettings} verticalContentHeight="330px" header={verticalHeader}></Carousel>
                </div>             
            </div>
        );
    }
}

`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}