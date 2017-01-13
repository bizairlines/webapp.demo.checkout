angular.module("EnvConstants", [])

.constant("EnvConstants", {
	"env": "DEV",
	"apiUrl": "https://stage.api.bizairlines.com/v1",
	"socketUrl": "wss://stage.ws.bizairlines.com:8000"
})

;