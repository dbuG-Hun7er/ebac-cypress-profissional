FROM cypress/included:13.17.0

WORKDIR /app

COPY package*.json ./

RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

COPY . .

CMD ["npx", "cypress", "run"]