FROM node:alpine as builder

WORKDIR '/app'

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# 필수 패키지 파일을 이미지 내부로 복사하고, npm 명령어로 설치합니다
COPY ./package*.json ./
RUN npm install


RUN yarn build
COPY . .

CMD ["npm", "start"]
