import streamlit as st
from snowflake.snowpark.context import get_active_session

st.title("Hello from Git + Streamlit in Snowflake")
session = get_active_session()
st.write(session.sql("select current_user() as user, current_database() as db, current_schema() as schema").to_pandas())
