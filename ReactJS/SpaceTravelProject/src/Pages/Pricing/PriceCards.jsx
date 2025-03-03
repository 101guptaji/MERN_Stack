import SingleCard from "./SingleCard"

const PriceCards = () => {
    const plans = [
        {
            id: 1,
            heading: "Bronze",
            features: [
                "100 visits",
                "2 meals a day",
                "2 months access",
            ],
            price: "499"
        },
        {
            id: 2,
            heading: "Silver",
            features: [
                "200 visits",
                "3 meals a day",
                "5 months access",
            ],
            price: "999"
        },
        {
            id: 3,
            heading: "Gold",
            features: [
                "Unlimited visits",
                "Unlimited meals",
                "1 year access",
            ],
            price: "1999"
        },

    ]
    return (
        <div className="price-cards">
            <h2 className="heading">Plans</h2>
            <div className="cards">
                {
                    plans.map((plan) => {
                        const { id, heading, features, price } = plan;
                        return (
                            <SingleCard key={id}
                                heading={heading}
                                features={features}
                                price={price} />
                        )

                    })
                }
            </div>
        </div>
    )
}

export default PriceCards