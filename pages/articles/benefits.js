import Footer_ from "../../components/Footer/Footer"
import Navigation from "../../components/Navigation/Navigation"

import {
	Page,
	Main,
	Title,
	Heading,
	Paragraph,
	Points,
	Point
} from "../../components/Articles/articleStyles"

export default function Benefits_() {
	return (
		<Page>
			<Navigation />
			<Main>
				<Title>The benefits of having a financial plan</Title>

				<Points>
					<Point>
						<Heading>Your financial goals are quantified</Heading>
						<Paragraph>
							Our financial goals are often qualitative - e.g. “I want to retire
							when I’m rich” or “I want to travel the world before I get old”.
							By putting numbers to our goals, we’ll be able to design
							measurable action plans to achieve them.
						</Paragraph>
					</Point>
					<Point>
						<Heading>It is unique to you</Heading>
						<Paragraph>
							It’s common to hear or read financial conventions like: save at
							least 10% of your income; you should put your money in stocks
							while you’re young; your insurance coverage should be 12 times
							your annual income. While some of these may be true, it doesn’t
							necessarily mean it is applicable to anyone. Each one of us has
							our own financial circumstances that need to be addressed
							differently.
						</Paragraph>
					</Point>

					<Point>
						<Heading>
							You’ll have confidence in your investment decisions
						</Heading>
						<Paragraph>
							Because a financial plan helps you quantify goals and helps you
							lay out the steps that need to be done to achieve them, you won’t
							have any hard time picking the right financial instrument - the
							one best suited for the goals you want to achieve.
						</Paragraph>
					</Point>

					<Point>
						<Heading>You have a guide in making financial decisions.</Heading>
						<Paragraph>
							Sometimes, we are worried that we might be overspending on
							something or we might not be saving enough. Having a complete
							picture of how your resources are currently allocated to your
							different financial goals, you’ll have peace of mind when you make
							spending decisions. A financial plan doesn’t restrict our spending
							- it just shows us the consequences of our decisions.
						</Paragraph>
					</Point>

					<Point>
						<Heading>Helps you set your earning standard</Heading>
						<Paragraph>
							By determining how much you need to allocate for each of your
							financial goals, you will get an idea of how big your investible
							surplus should be - and that in turn, will show you how much more
							you need to earn, from your current job or other sources of
							income, if you have a deficit. Of course, our investments will
							maximize our potential for meeting life goals but we should not
							solely rely on them to achieve everything for us. We should
							remember that the more returns we want from our investments, the
							more risk we have to take - the more learning effort we need to
							put in.
						</Paragraph>
					</Point>
				</Points>
			</Main>
			<Footer_ />
		</Page>
	)
}