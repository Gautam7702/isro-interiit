from typing import final


def convert_to_apt_type(response):
    """
    Convert response to apt type.
    """
    try:
        apt_response = {}
        apt_response["graph_data"] = response["graph_data"].tolist()
        apt_response["peaks"] = [
            {
                "peak_position": int(response["peaks"][i]["peak_position"]),
                "range": [int(x) for x in response["peaks"][i]["range"]],
                "rise_time": str(float(response["peaks"][i]["rise_time"])) + " ms",
                "decay_time": str(float(response["peaks"][i]["decay_time"])) + " ms",
                "peak_flux": float(response["peaks"][i]["peak_flux"]),
                "duration": str(float(response["peaks"][i]["duration"])) + " ms",
            }
            for i in range(len(response["peaks"]))
        ]
        apt_response["OK"] = response["OK"]
    except Exception as e:
        print(e)
        apt_response = {
            "OK": {
                "status": False,
                "message": "Error while converting response to apt type.",
            }
        }
    finally:
        return apt_response
