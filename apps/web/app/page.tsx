import { Button } from "@web2/ui/src/Button";
import { formatDate } from "@web2/utils/src/index";

export default function Home() {
  return (
    <html>
        <body>
            <div>
                <h1>{formatDate(new Date())}</h1>
                <Button>Hello from UI package</Button>
            </div>
        </body>
    </html>
  );
}
