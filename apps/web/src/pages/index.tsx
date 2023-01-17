import { BackgroundField } from "../components/BackgroundField";
import { TopBar } from "../components/TopBar";
import UseAuth from "../service/hook/useAuth";

export default function Home() {
	const { user } = UseAuth()

	console.log(user)
	return (
		<BackgroundField>
			<TopBar />
		</BackgroundField>
	)
}
