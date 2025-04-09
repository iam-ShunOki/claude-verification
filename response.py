"""
OpenAI Responses API Cookbook
https://cookbook.openai.com/examples/responses_api/responses_example
"""

from openai import OpenAI
import os
import json
import base64
from IPython.display import Image, display
import dotenv
dotenv.load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

"""
1. リクエストを送信
"""
# response = client.responses.create(
#     model="gpt-4o-mini",
#     input="ジョークを言って",
# )
# print(response)

"""
2. 指定したレスポンスIDの会話を取得
"""
fetched_response = client.responses.retrieve(
response_id="resp_67d0d9a86c948191a724e24bb8f678100acc087d94104688")

print(fetched_response.output[0].content[0].text)

"""
3. 前のレスポンスを参照すれば、会話を続けることができる。
"""
# response_two = client.responses.create(
#     model="gpt-4o-mini",
#     input="どういう意味か解説して",
#     previous_response_id="resp_67d0d9a86c948191a724e24bb8f678100acc087d94104688"
# )
# print(response_two.output[0].content[0].text)

"""
4. ツールを使用した会話 web_search 
"""
# response = client.responses.create(
#     model="gpt-4o",  # or another supported model
#     input="2025年3月のAIニュースを教えてください。",
#     tools=[
#         {
#             "type": "web_search"
#         }
#     ]
# )
# print(json.dumps(response.output, default=lambda o: o.__dict__, indent=2))


"""
5.マルチモーダル、ツール拡張会話
Responses APIはテキスト、画像、音声のモダリティをネイティブでサポートしています。
すべてを結びつけることで、Responsions APIを通した1回のAPIコールで、完全にマルチモーダルなツール拡張型のインタラクションを構築できます。
"""
# Display the image from the provided URL
# url = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/2880px-Cat_August_2010-4.jpg"
# display(Image(url=url, width=400))

# response_multimodal = client.responses.create(
#     model="gpt-4o",
#     input=[
#         {
#             "role": "user",
#             "content": [
#                 {"type": "input_text", "text": 
#                  "画像に関連するキーワードを考え、検索ツールを使ってそのキーワードに関連するニュースをウェブで検索してください。"
#                  "検索結果をまとめて、情報源も示してください。"},
#                 {"type": "input_image", "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/2880px-Cat_August_2010-4.jpg"}
#             ]
#         }
#     ],
#     tools=[
#         {"type": "web_search"}
#     ]
# )
# print(json.dumps(response_multimodal.__dict__, default=lambda o: o.__dict__, indent=4))
# for i in response_multimodal.output[0].content:
#     print(i.text)
