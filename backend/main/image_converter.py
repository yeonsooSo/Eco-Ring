import base64
import io
import numpy as np
from PIL import Image
import cv2

class ImageConverter:

  @classmethod
  def stringToRGB(cls, base64_string):
      imgdata = base64.b64decode(base64_string)
      dataBytesIO = io.BytesIO(imgdata)
      image = Image.open(dataBytesIO)
      return cv2.cvtColor(np.array(image), cv2.COLOR_BGR2RGB)

  @classmethod
  def RGBTostring(cls, img):
    jpg_img = cv2.imencode('.jpg', img)
    return base64.b64encode(jpg_img[1]).decode('utf-8')

  @classmethod
  def convert(cls, bg, origin, img, idx):

    # 배경 이미지 불러와서 자르고 리사이즈
    bg = cls.stringToRGB(bg)
    bg_h, bg_w, bg_C = bg.shape
    bg_size = min(bg_h, bg_w)
    bg = bg[(bg_h - bg_size)//2:(bg_h - bg_size)//2+ bg_size , (bg_w - bg_size)//2:(bg_w - bg_size)//2 + bg_size]
    bg = cv2.resize(bg, dsize=(800, 800), interpolation=cv2.INTER_AREA)

    # 원본배경
    origin = cls.stringToRGB(origin)
    origin_h, origin_w, origin_C = origin.shape
    origin_size = min(origin_h, origin_w)
    origin = origin[(origin_h - origin_size)//2:(origin_h - origin_size)//2+ origin_size , (origin_w - origin_size)//2:(origin_w - origin_size)//2 + origin_size]
    origin = cv2.resize(origin, dsize=(800, 800), interpolation=cv2.INTER_AREA)

    # 유저 이미지 불러와서 자르고 리사이즈
    user = cls.stringToRGB(img)
    h, w, c = user.shape
    size = min(h, w)
    user = user[h-size:size, w-size:size]
    user = cv2.resize(user, dsize=(40, 40), interpolation=cv2.INTER_AREA)


    # bg에 사진 들어갈 부분 roi 설정
    roi = user[0:40, 0:40]
    color_bg = origin.copy()
    roi_x = idx % 20 * 40
    roi_y = idx // 20 * 40

    # roi 영역에 들어갈 사진 색감 입히기
    roi = cv2.addWeighted(roi, 0.4, color_bg[roi_y:roi_y + 40, roi_x:roi_x + 40], 0.6, 1)

    # 백그라운드 이미지 그레이스케일  변환
    if idx==0:
      gray = color_bg.copy()
      gray = cv2.cvtColor(gray, cv2.COLOR_BGR2GRAY)
      gray = cv2.cvtColor(gray, cv2.COLOR_GRAY2BGR)
      gray[roi_y:roi_y + 40, roi_x:roi_x + 40] = roi
      return cls.RGBTostring(gray)
    else:
      back = bg.copy()
      back[roi_y:roi_y + 40, roi_x:roi_x + 40] = roi
      return cls.RGBTostring(back)

