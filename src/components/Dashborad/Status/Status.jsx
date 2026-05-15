import CardStatus from '../../ui/CardStatus/CardStatus';

const cards = [
    { counter: 100, title: "Users", icon: "fa-users" },
    { counter: 120, title: "Projects", icon: "fa-building" },
    { counter: 200, title: "Developers", icon: "fa-code" },
    { counter: 220, title: "Jameel", icon: "fa-chart-line" },
];

function Status() {
    return (
        <section className="py-4">
            <div className="container">
                <div className="row">
                    {cards.map((card, index) => (
                        <div className="col-12 col-md-3" key={index}>
                            <CardStatus counter={card.counter} title={card.title} icon={card.icon} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Status;
