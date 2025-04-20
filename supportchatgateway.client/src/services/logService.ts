import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { SIGNALR_HUB_URL } from "../config/api";
import { Log } from "../types/Log";

class LogService {
    private hubConnection: HubConnection | null = null;

    public async startConnection(): Promise<void> {
        this.hubConnection = new HubConnectionBuilder()
            .withUrl(SIGNALR_HUB_URL)
            .withAuthomaticReconnect()
            .build();

        try {
            await this.hubConnection.start();
            console.log("SignalR connected.");
        }
        catch(error){
            console.error("SignalR connection error: ", error);
        }
    }

    public async stopConnection() : Promise<void> {
        if(this.hubConnection) {
            await this.hubConnection.stop();
            console.log("SignalR disconected")
        }
    }

    public onReceiveLog(callback: (log: Log) => void): void {
        if(this.hubConnection){
            this.hubConnection.on("ReceiveLog", callback);
        }
    }
}

const logService = new LogService();
export default logService;